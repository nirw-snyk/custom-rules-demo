# use cases:
1. find secrets etc - via strings / regular expressions: Find string:
  - 1.a "password"
  - 1.b ~"pass.*|root"

2. Custom / Standard Tainted vuln:
  - 2.a Custom Taint Vulnarability - OTB example: find SQL injection when source custom method (e.g "getRequest") and sink custom method (e.g "insertToDataBase") aren't availbel
  - 2.b Standard Taint Vulnarability - OTB + OTB on custom code - investigate code for common vulns
  - 2.c Taint<PRED:AnySource, CallExpression<"myOwnSanitizer">, PRED:SqliSink> - as part of the investigation "filter" results based on custom sanitizer

3. Flag risky custom method + create a rule:
  - 3.a Find library function calls: myOwnSanitizer
  - 3.b test to make sure this isn't creating FP's + create a rule
  - 3.c Custom Sanitiser: Taint<PRED:AnySource,  CallExpression<"myOwnSanitizer">, PRED:SqliSink>

# building a real-life example:
## custom rule to flag http use instead of https 
##############################################################################
finding an example URL
```
"http://example.com/api/data"
```

finding it using regex:
```
~"http://.*"
```
finding python get request for the example URL
```
And<"requests.get",  HasArg1<"http://example.com/api/data">>
```
finding python get request for the URL using regex
```
And<"requests.get",  HasArg1<~"http://.*">>
```

finding non-get requests like put,post head using regex for python
```
And<~"requests.(get|put|post|head)",  HasArg1<~"http://.*">>
```

Extending the query to support JS utilising axios
```
And<
Or<
~"requests.(get|put|post|head)",  # Python
~"axios.(get|put|post|head)"      # JS
>,
HasArg1<~"http://.*">
>
```

for kotlin using khttp we will have slightly different behaviour: khtpp is the parent of get
```
"get" HasArg0<"khttp">
```
make it a bit more readable:
```
And<"get", HasArg0<"khttp">>
```
extend it to other non-get methods using regex as before:
```
And<~"(get|put|post|head)", HasArg0<"khttp">>
```

Now let's bring it all together - note And/Or are binary - work on only 2 arguments -let's nest things then:

```
And<
  Or<
    And<~"(get|put|post|head)", HasArg0<"khttp">>,
    Or<
        ~"requests.(get|put|post|head)",  # Python
        ~"axios.(get|put|post|head)"     # JS  
      >
    >,
  HasArg1<~"http://.*">
>
```
