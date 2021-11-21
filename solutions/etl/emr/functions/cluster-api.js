import {buildResponse} from './helper';

export async function create(event) {
    try{
        return buildResponse(200, 'cluster created', 1);
    } catch (err) {
        return buildResponse(422, err.message||JSON.stringify(err), 1);
    }
}

export async function edit(event) {
    try {
        return buildResponse(200, 'cluster edited', 1);
    } catch (err) {
        return buildResponse(422, err.message||JSON.stringify(err), 1);
    }
}

export async function details(event) {
    try {
        return buildResponse(200, 'cluster details', 1);
    } catch (err) {
        return buildResponse(422, err.message||JSON.stringify(err), 1);
    }
}

export async function deleteCluster(event) {
    try {
        return buildResponse(200, 'delete cluster', 1);
    } catch (err) {
        return buildResponse(422, err.message||JSON.stringify(err), 1);
    }
}

export async function list(event) {
    try{
        return buildResponse(200, 'list clusters', 1);
    } catch (err) {
        return buildResponse(422, err.message||JSON.stringify(err), 1);
    }
}

export async function instances(event) {
    try {
        return buildResponse(200, 'cluster instances', 1);
    } catch (err) {
        return buildResponse(422, err.message||JSON.stringify(err), 1);
    }
}