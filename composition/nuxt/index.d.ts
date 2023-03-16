import type ToastInterface from "../../dist/types/src/ts/interface";

declare let useToast: () => ReturnType<typeof ToastInterface>;

export { useToast };
