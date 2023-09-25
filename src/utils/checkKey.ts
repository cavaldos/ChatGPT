
import { Configuration, OpenAIApi} from "openai";

export const checkApiKey = async (apiKey: string) => {
  try {
    const configuration = new Configuration({
      apiKey: apiKey,
    
    });
    
    const openai = new OpenAIApi(configuration);
    
    const response: any = await openai.listModels();
    
    console.log(response.data);
    
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



// import { Configuration, OpenAIApi } from "openai";
// export const checkApiKey = async (keys: string) => {
//   const configuration = new Configuration({
//     apiKey: keys,
//   });

//   const openai = new OpenAIApi(configuration);

//   return openai.listModels();
// };
