import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "../../../../entities/Profile";
import { ReducerList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../../../entities/Article/model/slice/articleDetailsSlice";
import { AddNewCommentReducer } from "features/AddNewComment/model/slice/addNewCommentSlice";
import { ArticleDetailsCommentReducer } from "pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewComment: AddNewCommentReducer,
    articleDetailsComments: ArticleDetailsCommentReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: StoryFn) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
