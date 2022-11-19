-- Deploy framethrower:frametrower_public.v_post to pg

begin;

  create view framethrower_public.v_post as
    select
      news.id,
      news.body,
      news.slug,
      news.thumbnail,
      news.created_at,
      news.updated_at,
      news.status,
      news.title,
      news.intro,
      pro.id is not null as pro_content,
      case
        when
          'pro' = current_setting('jwt.claims.premium', true)
        then pro.video_url
        when
          'active' = current_setting('jwt.claims.instructor', true)
        then pro.video_url
        when
          'framethrower_admin' = current_setting('jwt.claims.role', true)
        then
          pro.video_url
        else null
      end as video_url,
      case
        when
          'pro' = current_setting('jwt.claims.premium', true)
        then pro.body
        when
          'active' = current_setting('jwt.claims.instructor', true)
        then pro.body
        when
          'framethrower_admin' = current_setting('jwt.claims.role', true)
        then
          pro.body
        else null
      end as pro_post
      from framethrower_public.news news
      left join framethrower_hidden.news_pro_content pro ON news.id = pro.news_id where news.status = 'published';
    grant select on framethrower_public.v_post to framethrower_banned, framethrower_inactive, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;

commit;
