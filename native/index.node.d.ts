declare module native {
    function hello(): string;
    function echo(arg: string): string | undefined;
}

export default native