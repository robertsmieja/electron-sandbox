use neon::prelude::*;
// use neon::register_module;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}

fn echo(mut cx: FunctionContext) -> JsResult<JsString> {
    let len = cx.len();
    if len <= 0 {
        return Ok(cx.string(""));
    }
    //
    // let mut result = String::new();
    // for arg in cx {
    //     result += arg;
    // }
    // return Ok(cx.string(result).downcast()?);
    let arg = cx.argument::<JsString>(0).unwrap();
    println!("{}", arg.value());
    return Ok(arg);
}

register_module!(mut cx, {
    cx.export_function("echo", echo)?;
    cx.export_function("hello", hello)?;
    Ok(())
});
