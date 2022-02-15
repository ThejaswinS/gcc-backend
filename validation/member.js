import joi from "joi";

export const ValidateMemberName = (restaurantObj) => {
    const Schema = joi.object({
        name: joi.string().required(),
    });

    return Schema.validateAsync(restaurantObj);
};

export const ValidateMemberSearchString = (restaurantObj) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
    });

    return Schema.validateAsync(restaurantObj);
};