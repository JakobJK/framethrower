-- Deploy flipr:framethrower_hidden.type.feedback_request_status to pg

begin;
  create type framethrower_public.feedback_request_status as enum ('none', 'requested', 'fulfilled');
commit;