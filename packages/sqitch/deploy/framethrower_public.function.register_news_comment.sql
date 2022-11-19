-- Deploy flipr:framethrower_public.function.register_news_comment to pg

begin;

create or replace function framethrower_public.register_news_comment(body_ text, news_id_ uuid)
  returns framethrower_public.news_comment as $$
  insert into framethrower_public.news_comment
  (body, news_id, profile_id) values (body_, news_id_, current_setting('jwt.claims.id')::UUID) returning *;
  $$ language sql;
  grant execute on function framethrower_public.register_news_comment(text, uuid) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;