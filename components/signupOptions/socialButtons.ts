import { xIcon } from "@/icons/xIcon";
import { appleIcon } from "@/icons/appleIcon";
import { ISocialButton } from "./ISocialButton";
import { googleIcon } from "@/icons/googleIcon";
import { facebookIcon } from "@/icons/facebookIcon";
import { appleAuth } from "@/utils/authOptions/appleAuth";
import { googleAuth } from "@/utils/authOptions/googleAuth";
import { twitterAuth } from "@/utils/authOptions/twitterAuth";
import { facebookAuth } from "@/utils/authOptions/facebookAuth";

export const socialButtons: ISocialButton[] = [
  { icon: googleIcon, label: "Google", onClick: googleAuth },
  { icon: facebookIcon, label: "Facebook", onClick: facebookAuth },
  { icon: xIcon, label: "Twitter", onClick: twitterAuth },
  { icon: appleIcon, label: "Apple", onClick: appleAuth },
];
