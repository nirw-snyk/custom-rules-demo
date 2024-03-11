#use cases:
1. find secrets etc - via strings / regular expressions: Find string:
  1.a "password"
  1.b ~"pass.*|root"

2. Custom / Standard Tainted vuln:
  2.a Custom Taint Vulnarability - OTB example: find SQL injection when source custom method (e.g "getRequest") and sink custom method (e.g "insertToDataBase") aren't availbel
  2.b Standard Taint Vulnarability - OTB + OTB on custom code - investigate code for common vulns
  2.c Taint<PRED:AnySource, CallExpression<"myOwnSanitizer">, PRED:SqliSink> - as part of the investigation "filter" results based on custom sanitizer

3. Flag risky custom method + create a rule:
  3.a Find library function calls: myOwnSanitizer
  3.b test to make sure this isn't creating FP's + create a rule




Custom Sanitiser: Taint<PRED:AnySource,  CallExpression<"myOwnSanitizer">, PRED:SqliSink>

#################################
#"http://example.com/api/data"
#~"http://.*"
#And<"requests.get",  HasArg1<"http://example.com/api/data">>
#And<"requests.get",  HasArg1<~"http://.*">>
#And<~"requests.(get|put|post)",  HasArg1<~"http://.*">>

#And<
#Or<
#~"requests.(get|put|post|head)",  # Python
#~"axios.(get|put|post|head)"      # JS
#>,
#HasArg1<~"http://.*">
#>


#"get" HasArg0<"khttp">


And<
  Or<
    And<~"(get|put|post|head)", HasArg0<"khttp">>,
    Or<
        ~"requests.(get|put|post|head)",  # Python
        ~"axios.(get|put|post|head)",     # JS  
      >
 >,
  HasArg1<~"http://.*">
>
