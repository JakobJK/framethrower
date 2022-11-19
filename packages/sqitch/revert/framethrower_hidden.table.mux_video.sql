-- Revert flipr:framethrower_hidden.table.mux_video from pg

begin;

  drop table if exists framethrower_hidden.mux_video cascade;

commit;
