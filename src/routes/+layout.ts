import type { Load } from "@sveltejs/kit";

export const load: Load = ({url}) => {
    return {url: url.pathname};
}
