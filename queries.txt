#use cases:
1. find secrets etc - via strings / regular expressions: Find string:
  1.a "password"
  1.b ~"pass.*|root"

2. Custom / Standard Tainted vuln:
  2.a Custom Taint Vulnarability - OTB
  2.b Standard Taint Vulnarability - OTB + OTB on custom code
  2.c Taint<PRED:AnySource, CallExpression<"myOwnSanitizer">, PRED:SqliSink>

3. Flag risky custom method:



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
