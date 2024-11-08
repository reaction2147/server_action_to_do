interface ButtonProps {
    type?: "button" | "submit" | "reset"; // Add other props as needed
    children: React.ReactNode;
  }
  
  const Button = ({ type = "button", children }: ButtonProps) => {
    return <button type={type}>{children}</button>;
  };
  
  export default Button;