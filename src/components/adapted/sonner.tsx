import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <span className="icon-[lucide--check] size-4" />,
        info: <span className="icon-[lucide--info] size-4" />,
        warning: <span className="icon-[lucide--alert-triangle] size-4" />,
        error: <span className="icon-[lucide--x-octagon] size-4" />,
        loading: <span className="icon-[lucide--loader-2] size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      theme={theme as ToasterProps["theme"]}
      {...props}
    />
  );
};

export { Toaster };
