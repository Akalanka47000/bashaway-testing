import { functionCalls, functionCallFollowedByAnd, compactString } from "./patterns";

export { compactString };

export * from "./commands";
export * from "./secrets";

export const cleanLogs = (code) =>
  compactString(
    code.replace(
      code.includes("console.log")
        ? functionCallFollowedByAnd("console.log")
        : functionCalls(["print", "System.out.println", "Console.WriteLine"]),
      ""
    )
  );
