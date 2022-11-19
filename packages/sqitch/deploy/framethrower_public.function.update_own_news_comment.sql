-- Deploy framethrower:framethrower_public.function.update_own_news_comment to pg

begin;
  create or replace function framethrower_public.update_own_news_comment(body_ text, id_ UUID)
    returns framethrower_public.news_comment as $$
      update framethrower_public.news_comment set body = body_, updated_at = now() where news_comment.profile_id = current_setting('jwt.claims.id', true)::uuid and news_comment.id = id_::uuid returning news_comment.*;
    $$ language sql;
  grant execute on function framethrower_public.update_own_news_comment(text, UUID) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;
