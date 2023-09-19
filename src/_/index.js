import { functionCalls, functionCallFollowedByAnd, compactString, isStrongPassword } from "./patterns";

export { compactString, isStrongPassword };

export * from "./commands";
export * from "./git";
export * from "./restrict";
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
