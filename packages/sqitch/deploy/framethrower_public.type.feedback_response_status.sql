-- Deploy flipr:framethrower_hidden.type.feedback_status to pg

begin;
  create type framethrower_public.feedback_response_status as enum ('unclaimed', 'pending','processed','uploading','conceded');
commit;