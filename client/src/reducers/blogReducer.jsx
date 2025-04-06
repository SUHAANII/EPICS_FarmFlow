export const INITIAL_STATE = {
    userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
    title: "",
    subtitle: "",
    coverImage: "",
    tags: [],
    description: "",
    comments: [],
};

export const blogReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "ADD_IMAGES":
            return {
                ...state,
                coverImage: action.payload.cover, 
            };

            case "ADD_TAGS":
                return {
                  ...state,
                  tags: [...state.tags, action.payload], // ✅ payload is just a string now
                };
              


        default:
            return state;
    }
};