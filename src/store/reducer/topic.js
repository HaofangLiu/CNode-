function topic(
  topic = {
    loading: true,
    data: {
      author: {}
    },
    isError: false,
    errorMsg: ""
  },
  action
) {
  switch (action.type) {
    case "topic_loading":
      return {
        loading: true,
        data: {
          author: {}
        },
        isError: false,
        errorMsg: ""
      };
    case "topic_loadover":
      return {
        loading: false,
        data: action.data,
        isError: false,
        errorMsg: ""
      };

    case "topic_error":
      return {
        loading: true,
        data: {
          author: {}
        },
        isError: true,
        errorMsg: action.errorMsg
      };
  }
  return topic;
}

export default topic;
