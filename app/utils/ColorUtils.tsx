const colors = {
    "primary_background_dark": '#151821',
    "primary_background_light": '#DEDAC8',
    "secondary_background_dark": '#1F2230',
    "secondary_background_light": '#CCC7B2',
    "primary_text_dark": "#FFFFFF",
    "primary_text_light": "#000000",
    "primary_border_dark": "#FFFFFF",
    "primary_border_light": "#000000"
};

export const getBackgroundColors = (isDarkTheme: boolean) => {
    return isDarkTheme ? colors["primary_background_dark"] : colors["primary_background_light"];
}

export const getTextColors = (isDarkTheme: boolean) => {
    return isDarkTheme ? colors["primary_text_dark"] : colors["primary_text_light"];
}

export const getBorderColors = (isDarkTheme: boolean) => {
    return isDarkTheme ? colors["primary_border_dark"] : colors["primary_border_light"];
}