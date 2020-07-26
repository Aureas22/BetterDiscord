export default {
    video: "https://i.zackrauen.com/EEM6Nor0XW.mp4",
    poster: "https://i.imgur.com/tNGALts.jpeg",
    description: "The rewrite you didn't even know about is finally here.",
    changes: [
        {
            title: "What's New?",
            items: [
                "**Everything** is entirely rewritten, for better or worse.",
                "**Emotes and CustomCSS** can be completely turned off for those not interested. It saves on memory too but not loading those components.",
                "**Floating editors** for both custom css and plugins/themes are now available. (See video above)",
                "**Settings panels** are completely new and sleek. They are also highly extensible for potential future features :eyes:",
                "**Translations** are now integrated starting with only a couple languages, but feel free to contribute your own!",
                "**Emote menu** now uses React Patching and properly integrates into the new Emoji Picker. (Thanks Strencher#1044!)"
            ]
        },
        {
            title: "Minor Stuff",
            type: "improved",
            items: [
                "**Patcher API** was added to `BdApi` under `BdApi.Patcher`. The old `BdApi.monkeyPatch` was patched to use the Patcher as well. This allows plugins and patches to play nice with one another.",
                "**jQuery** usage was totally eliminated and is now ___deprecated___ for plugins.",
                "**General performance** improvements throughout the app, from startup to emotes to addons.",
                "**Exporting** by plugins is now highly encouraged over trying to match your meta name and class name."
            ]
        },
        {
            title: "Fixes",
            type: "fixed",
            items: [
                "There are a lot of little issues that this rewrite fixes.",
                "I forgot to write them down",
                "But I'm sure many more will be found soon"
            ]
        }
    ]
};