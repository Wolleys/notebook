import { xIcon } from "@/icons/xIcon";
import { appleIcon } from "@/icons/appleIcon";
import { ISocialButton } from "./ISocialButton";
import { googleIcon } from "@/icons/googleIcon";
import { facebookIcon } from "@/icons/facebookIcon";

const handleGoogle = () => {
  console.log("Google button clicked");
};

const handleFacebook = () => {
  console.log("Facebook button clicked");
};

const handleTwitter = () => {
  console.log("Twitter button clicked");
};

const handleApple = () => {
  console.log("Apple button clicked");
};

export const socialButtons: ISocialButton[] = [
  { icon: googleIcon, label: "Google", onClick: handleGoogle },
  { icon: facebookIcon, label: "Facebook", onClick: handleFacebook },
  { icon: xIcon, label: "Twitter", onClick: handleTwitter },
  { icon: appleIcon, label: "Apple", onClick: handleApple },
];
