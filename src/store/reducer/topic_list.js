function topics(topics = { loading: true, data: [] }, action) {
  switch (action.type) {
    case "topics_loading":
      return { loading: true, data: [] };
    case "topics_loadover":
      return { loading: false, data: action.data };
  }
  return topics;
}

export default topics;
