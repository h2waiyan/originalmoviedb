export interface Movie {
    page?: number;
    results?: Result[];
    total_pages?: number;
    total_results?: number;
}

export interface Result {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: Date;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}


// class Car {
//     noOfDoor: number = 5;
//     color: string = 'red';

//     constructor(doors: number, color : string) {
//         this.noOfDoor = doors;
//         this.color = color
//     }
// }

// const bmw = new Car(7, 'yellow');