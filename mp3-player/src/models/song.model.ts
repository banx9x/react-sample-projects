export interface Singer {
  avatar: string;
  name: string;
}

export interface Song {
  id: string;
  title: string;
  url: string;
  singer: Singer;
}
