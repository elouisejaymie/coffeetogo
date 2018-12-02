CREATE TABLE [dbo].[Beverage] (
    [BeverageId]  INT                IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (50)      NOT NULL,
    [Description] NVARCHAR (500)     NULL,
    [DateCreated] DATETIMEOFFSET (7) NOT NULL,
    [DateUpdated] DATETIMEOFFSET (7) NOT NULL,
    CONSTRAINT [PK_Beverage] PRIMARY KEY CLUSTERED ([BeverageId] ASC)
);

