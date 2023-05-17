import { Client } from 'appwrite';
import { ENDPOINT, PROJECT_ID } from './constants.server';

export const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
