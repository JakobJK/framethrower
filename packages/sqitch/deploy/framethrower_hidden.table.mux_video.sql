-- Deploy flipr:framethrower_hidden.table.mux_video to pg

begin;

  create table framethrower_hidden.mux_video(
    id text not null primary key,
    upload_id uuid not null references framethrower_hidden.upload(id) on delete cascade,
    playback_id text not null
  );

commit;
