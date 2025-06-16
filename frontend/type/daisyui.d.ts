// types/daisyui.d.ts

// Example: custom theme config for IntelliSense
declare module "daisyui" {
  interface DaisyUIThemes {
    mytheme: {
      primary: string;
      secondary: string;
      accent: string;
      neutral: string;
      "base-100": string;
    };
  }
}
