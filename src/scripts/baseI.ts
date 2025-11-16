// Project Gowers (part of Project Angus)

export const apiRootURL="http://ws.audioscrobbler.com/2.0/"

const userAgentString="project-gowers/v0.0.0,project-angus/v0.0.0 Project Angus"

export function getHttpHeaders(){
    return {
		'content-type': 'application/json',
        'User-Agent': userAgentString
	}
}