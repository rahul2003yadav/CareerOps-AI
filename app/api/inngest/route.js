// import { serve } from "inngest/next";
// import { inngest } from "@/lib/inngest/client";
// import { generateIndustryInsights } from "@/lib/inngest/functions";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest, 
//   functions: [
//     /* your functions will be passed here later! */
//     [generateIndustryInsights],
//   ],
// });
import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights], // ← removed extra []
});
