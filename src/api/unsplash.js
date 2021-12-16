import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID NWtzMgokPEPxLj3G60ABlayUByf-Auoe8lnEdZOBzl4'
    }
});
