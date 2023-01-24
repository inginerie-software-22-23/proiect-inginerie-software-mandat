interface SubTitle {
  question: string;
  buttonLink: string;
  buttonCaption: string;
}

export interface AccountFormDetails {
  pageTitle: string;
  subTitle: SubTitle;
}

export const RegisterAccountFormDetails: AccountFormDetails = {
  pageTitle: "Get Started",
  subTitle: {
    question: "Already have an account?",
    buttonLink: "/login",
    buttonCaption: "Sign In"
  },
};


export const SettingsAccountFormDetails: AccountFormDetails = {
  pageTitle: "Settings",
  subTitle: {
    question: "Changed your mind?",
    buttonLink: "/user-profile",
    buttonCaption: "Go back"
  },
};
