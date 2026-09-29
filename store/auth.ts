import { create } from "zustand"

export const useStore = create((set) => ({
    id: "",
    email: "",
    name: "",
    proflie_image: "",
    biography: "",
    // user: {
    //     proflie_image: "",
    //     biography: "",
    // },

    setUser: () => set((state) => ({ count: state.count + 1 })),
}))

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
