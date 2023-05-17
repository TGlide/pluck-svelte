import { ENDPOINT, PROJECT_ID } from '$env/static/private';
import { Client } from 'appwrite';

export const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
