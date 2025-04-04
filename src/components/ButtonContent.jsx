export const ButtonContent = ({ children, theme, className, href })=> {
    const baseClasse = "text-white hover:text-white"
    const themeClasses = 
        theme === "primary"
            ? "bg-p-3 hover:bg-p-2"
            : theme === "secondary"
            ? "bg-n-7 hover:bg-p-3"
            : "";

    const renderButton = () => ( 
        <button className={`button py-3 px-3 lg:py-6 rounded-lg ${baseClasse} ${themeClasses} ${className}`}>
            {children}
        </button>
    );

    const renderLink = () => (
        <a href={href}
            className={`button inline-block py-3 px-3 lg:py-6 rounded-lg no-underline ${baseClasse} ${themeClasses} ${className}`}
        >
            {children}
        </a>
    );

  return href ? renderLink() : renderButton()
};
