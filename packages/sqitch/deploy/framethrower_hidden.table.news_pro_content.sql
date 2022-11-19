-- Deploy framethrower:framethrower_hidden.table.news_pro_content to pg

begin;

  create table framethrower_hidden.news_pro_content(
    id uuid primary key not null default uuid_generate_v4(),
    news_id uuid not null references framethrower_public.news(id) on delete cascade,
    video_url text,
    body text
  );

commit;
