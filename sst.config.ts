import "dotenv/config";
import type { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config() {
    return {
      name: "open-next-bug",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "nodejs20.x",
      timeout: "15 minutes",
    });

    app.stack(({ stack }) => {
      const site = new NextjsSite(stack, "site", {
        environment: {
          AUTH_SECRET: process.env.AUTH_SECRET,
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
