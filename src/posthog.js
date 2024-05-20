//./plugins/posthog.js
import posthog from "posthog-js";

export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init(
      'phc_GOJrt0SMSoxbhiaC2hX1SMEZOPg9MQ5sv8TeStF1JKu',
      {
        api_host: 'https://us.i.posthog.com',
      }
    );
  },
};