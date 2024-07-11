//copywriting stuff



{/* <div className="space-y-4">
                  {savedmessages.map((message) => (
                    <div key={message.id}>
                      {message.input_text && (
                        <div className="flex justify-end my-8">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-prose">
                            {message.input_text}
                          </div>
                        </div>
                      )}
                      {message.generated_copy && (
                        <div className="flex justify-start">
                          <div className="bg-green-500 text-white px-4 py-2 rounded-lg max-w-prose">
                            {message.generated_copy}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div> */}

                  // useEffect(() => {
  //   try {
  //     axios
  //       .get(
  //         "https://web-production-73c6.up.railway.app/copywriting/get_saved_data",
  //         {
  //           headers: {
  //             Authorization:
  //               "e201022eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMjAxMDIyIn0.ivAr7jVP_PkcKNd4MHlmQzIOrRc1gFbDsgKukcitgjs_!-@_#-$_%-^_&-*_(-)17092023221020",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         getsavedmessages(response.data.saved_data);
  //       });
  //   } catch (error) {
  //     console.log("error agya hai");
  //   }
  // }, []);
