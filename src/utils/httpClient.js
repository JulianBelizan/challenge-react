const API = "https://api.themoviedb.org/3/";

export function get(path){
        return fetch(API + path, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U1ZDM2MWU1ZDE0ODgwN2I4MDE5MzFhNzMyNDM3OCIsInN1YiI6IjYyYmJkMDQxMzU2YTcxMDA2MWRjY2Y4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u1Cstc3rKQQgYNZpEWFXf3-FhWO_UGzt1uDjanfInTs",
            "Content-Type": "application/json;charset=utf-8",
          },
        }).then((result) => result.json());
}