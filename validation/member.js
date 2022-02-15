import joi from "joi";

export const ValidateMemberName = (memberObj) => {
    const Schema = joi.object({
        name: joi.string().required(),
    });

    return Schema.validateAsync(memberObj);
};

export const ValidateMemberSearchString = (memberObj) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
    });

    return Schema.validateAsync(memberObj);
};
