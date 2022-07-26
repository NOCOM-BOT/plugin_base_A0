import * as NOCOM_AType from "@nocom_bot/nocom-atype-support";

// For DRM purposes. You can check if your plugin is genuine or not, then report back to the handler.
// The handler will immediately crash the plugin if it receives non-genuine state coming from the plugin.
//
// Note: If no verification status is sent in 30s, the handler will also crash the plugin for not responding.
NOCOM_AType.verifyPlugin(true);

// Declaring an example function (funcName = value_true) that will always return true.
await NOCOM_AType.registerFuncPlugin("value_true", () => true);

// Example of calling (core) APIs...
let registeredModules = await NOCOM_AType.callAPI("core", "get_registered_modules", null);
// and then logging it to the console? Note that calling console.log or process.stdout.write do nothing.
await NOCOM_AType.log.info(registeredModules);

// Defining a command called /example_shutdown that will close the plugin if called.
await NOCOM_AType.registerCommand("example_shutdown", () => {
  // No specification for this yet.
}, async data => {
  NOCOM_AType.exit(0, "shutdown command called");
});

// Read the specification for more APIs: https://github.com/NOCOM-BOT/spec/blob/main/Plugin_A.md
