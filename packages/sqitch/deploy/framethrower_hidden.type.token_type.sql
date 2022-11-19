-- Deploy flipr:framethrower_hidden.type.token_type to pg

begin;
  create type framethrower_hidden.token_type as enum ('access_token', 'refresh_token');
commit;