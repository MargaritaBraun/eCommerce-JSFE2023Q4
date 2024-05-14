import interfaceForGetAccessToken from '../../utils/interface/interfaceForGetAccessToken';
import { clientId, clientSecret, projectKey, region } from '../constAPI';
// получение токена клиента
export default async function getAccessToken(): Promise<string> {
    const authString: string = `${clientId}:${clientSecret}`;
    const encodedAuthString: string = btoa(authString);
    const scope: string = `manage_project:${projectKey}`;
    const response: Response = await fetch(`https://auth.${region}.commercetools.com/oauth/token`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${encodedAuthString}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&scope=${scope}`,
    });
    const data: interfaceForGetAccessToken = await response.json();
    const accessToken = data.access_token;
    return accessToken;
}
