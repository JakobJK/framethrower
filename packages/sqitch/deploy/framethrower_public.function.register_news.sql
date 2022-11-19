-- deploy flipr:framethrower_public.function.register_news to pg

begin;

  create or replace function framethrower_public.register_news(
    title_ text,
    body_ text,
    thumbnail_ text,
    intro_ text,
    pro_content_ text default null,
    video_url_ text default null
    )returns framethrower_public.news as $$
    declare post framethrower_public.news;
    begin
      insert into framethrower_public.news
      (title, profile_id, body, slug, intro, thumbnail)
      values
      (title_, current_setting('jwt.claims.id', true)::uuid, body_, framethrower_public.slugify(title_), intro_, thumbnail_) returning * into post;
      if (pro_content_ is not null OR video_url_ is not null)
        then
          insert into framethrower_hidden.news_pro_content (news_id, body, video_url) values (post.id, pro_content_, video_url_);
      end if;
      return post;
    end;
  $$ language plpgsql security definer;

  grant execute on function framethrower_public.register_news(text, text, text, text, text, text) to framethrower_admin;

commit;
