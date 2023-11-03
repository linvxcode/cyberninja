import { create } from "zustand";
import axios from "axios";
import { AxiosResponse } from "axios";

interface ApexState {
    data: any;
    fetchData: () => Promise<void>;
    loading:boolean;
    setLoading: (isLoading: boolean) => void;
}


export const useApexData = create<ApexState>((set) => ({
    data: null,
    loading:false,
    fetchData: async () => {
        try {
            set({ loading: true });
            const res: AxiosResponse = await axios.get(
                "https://raddythebrand.github.io/apex-legends/data.json"
              );
              if(res.data){
                  set({data: res.data, loading: false})
              }
        } catch (error) {
            console.log(error)
        }
    },
    setLoading: (isLoading: boolean) => {
        set({ loading: isLoading });
      },
}))