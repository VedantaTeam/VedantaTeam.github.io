const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "DefaultCompany",
        productName: "MemesVsZombies",
        productVersion: "1.0",
        sdkVersion: "3.17.18",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/MemesVsZombies_Web_VKontakte.loader.js",
        dataURL: "bin/MemesVsZombies_Web_VKontakte.data",
        frameworkURL: "bin/MemesVsZombies_Web_VKontakte.framework.js",
        workerURL: "",
        codeURL: "bin/MemesVsZombies_Web_VKontakte.wasm",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "ThreeJs",
        iconTextureName: "MemesVsZombie-56.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "vkontakteWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

    }

})();