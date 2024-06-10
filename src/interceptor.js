export default {
  methods: {
    async authenticatedRequest() {
      const accessToken = sessionStorage.getItem("accessToken");

      try {
        const response = await axios({
          method: "post", // or 'post', 'put', etc.
          url: "yourAuthenticatedEndpoint",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Handle the response
        console.log(response.data);
      } catch (error) {
        // Handle errors, such as token expiration or network issues
        console.error("Authenticated request error:", error);
      }
    },
  },
};
